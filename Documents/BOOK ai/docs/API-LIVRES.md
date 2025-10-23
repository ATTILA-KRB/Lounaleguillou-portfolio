# API de Livres pour votre Projet Next.js

## 🎯 Meilleures API recommandées

### 1. **Open Library API** ⭐ (RECOMMANDÉE)
**Type:** Gratuite, publique, RESTful
**Documentation:** https://openlibrary.org/developers/api

**Avantages:**
- Plus de 3 millions de livres disponibles
- Données complètes (titre, auteur, ISBN, couverture, description)
- API de couvertures de livres intégrée
- Pas de clé API requise pour la lecture
- Format JSON, YAML, RDF/XML
- Base de données ouverte et collaborative

**Endpoints principaux:**
```javascript
// Recherche par ISBN
https://openlibrary.org/api/books?bibkeys=ISBN:9780451526538&format=json

// Recherche par titre/auteur
https://openlibrary.org/search.json?title=harry+potter&author=rowling

// Récupérer une œuvre
https://openlibrary.org/works/OL45883W.json

// Couverture de livre
https://covers.openlibrary.org/b/isbn/9780451526538-L.jpg
// Tailles: S (small), M (medium), L (large)
```

**Exemple Next.js:**
```typescript
// lib/openLibrary.ts
export async function searchBooks(query: string) {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=20`
  );
  const data = await response.json();
  return data.docs;
}

export async function getBookByISBN(isbn: string) {
  const response = await fetch(
    `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
  );
  const data = await response.json();
  return data[`ISBN:${isbn}`];
}

export function getCoverUrl(isbn: string, size: 'S' | 'M' | 'L' = 'M') {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`;
}
```

**Limites:**
- Rate limiting: 100 requêtes/5min par IP pour les couvertures
- Pas de limite pour les données JSON


---

### 2. **Google Books API** ⭐
**Type:** Gratuite avec quota
**Documentation:** https://developers.google.com/books/docs/v1/using

**Avantages:**
- Base de données massive
- Recherche très puissante
- Aperçus de livres disponibles
- Données très complètes (notes, avis, prix)
- API stable et bien documentée

**Configuration:**
1. Créer un projet sur Google Cloud Console
2. Activer l'API Google Books
3. Générer une clé API

**Endpoints principaux:**
```javascript
// Recherche de livres
https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=YOUR_API_KEY

// Livre par ID
https://www.googleapis.com/books/v1/volumes/VOLUME_ID?key=YOUR_API_KEY

// Recherche par ISBN
https://www.googleapis.com/books/v1/volumes?q=isbn:9780451526538&key=YOUR_API_KEY
```

**Exemple Next.js:**
```typescript
// lib/googleBooks.ts
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

export async function searchBooks(query: string, maxResults = 20) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=${maxResults}&key=${API_KEY}`
  );
  const data = await response.json();
  return data.items || [];
}

export async function getBookById(volumeId: string) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${volumeId}?key=${API_KEY}`
  );
  return response.json();
}
```

**Limites:**
- 1000 requêtes/jour (gratuit)
- 100 requêtes/100 secondes/utilisateur


---

### 3. **ISBNdb API**
**Type:** Freemium (gratuit avec limites)
**Documentation:** https://isbndb.com/apidocs

**Avantages:**
- Recherche par ISBN très précise
- Données complètes sur les éditions
- Base de données de 30+ millions de livres

**Prix:**
- Plan gratuit: 500 requêtes/mois
- Plan Pro: $29/mois - 10,000 requêtes

```javascript
// Exemple avec ISBNdb
const API_KEY = process.env.ISBNDB_API_KEY;

const response = await fetch(
  `https://api2.isbndb.com/book/${isbn}`,
  {
    headers: {
      'Authorization': API_KEY
    }
  }
);
```


---

### 4. **NYTimes Books API**
**Type:** Gratuite
**Documentation:** https://developer.nytimes.com/docs/books-product/1/overview

**Avantages:**
- Best-sellers du New York Times
- Critiques littéraires
- Recommandations de qualité
- Parfait pour les suggestions

**Exemple:**
```javascript
const API_KEY = process.env.NYTIMES_API_KEY;

// Liste des best-sellers
const response = await fetch(
  `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`
);
```

**Limites:**
- 4000 requêtes/jour
- 10 requêtes/minute


---

### 5. **Project Gutenberg API**
**Type:** Gratuite
**Documentation:** https://gutendex.com/

**Avantages:**
- 70,000+ livres du domaine public
- Livres téléchargeables gratuitement
- Formats EPUB, Kindle, texte

```javascript
// Recherche dans Gutenberg
const response = await fetch(
  `https://gutendex.com/books?search=${encodeURIComponent(query)}`
);
```


---

## 📦 Structure recommandée pour votre projet Next.js

```typescript
// lib/bookApi.ts
type BookSource = 'openlibrary' | 'google' | 'isbndb';

interface Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  coverUrl?: string;
  description?: string;
  publishDate?: string;
  source: BookSource;
}

class BookApiService {
  // Recherche multi-sources avec fallback
  async searchBooks(query: string): Promise<Book[]> {
    try {
      // Essayer Open Library d'abord (gratuit)
      const results = await this.searchOpenLibrary(query);
      if (results.length > 0) return results;
      
      // Fallback sur Google Books
      return await this.searchGoogleBooks(query);
    } catch (error) {
      console.error('Book search error:', error);
      return [];
    }
  }

  private async searchOpenLibrary(query: string): Promise<Book[]> {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=20`
    );
    const data = await response.json();
    
    return data.docs.map((doc: any) => ({
      id: doc.key,
      title: doc.title,
      author: doc.author_name?.[0] || 'Auteur inconnu',
      isbn: doc.isbn?.[0],
      coverUrl: doc.cover_i 
        ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        : null,
      description: doc.first_sentence?.[0],
      publishDate: doc.first_publish_year?.toString(),
      source: 'openlibrary'
    }));
  }

  private async searchGoogleBooks(query: string): Promise<Book[]> {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`
    );
    const data = await response.json();
    
    return (data.items || []).map((item: any) => ({
      id: item.id,
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors?.[0] || 'Auteur inconnu',
      isbn: item.volumeInfo.industryIdentifiers?.[0]?.identifier,
      coverUrl: item.volumeInfo.imageLinks?.thumbnail,
      description: item.volumeInfo.description,
      publishDate: item.volumeInfo.publishedDate,
      source: 'google'
    }));
  }
}

export const bookApi = new BookApiService();
```


---

## 🎨 Composant de recherche Next.js

```typescript
// components/BookSearch.tsx
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { bookApi } from '@/lib/bookApi';

export function BookSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    
    setLoading(true);
    const books = await bookApi.searchBooks(query);
    setResults(books);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Rechercher un livre..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button onClick={handleSearch} disabled={loading}>
          <Search className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {results.map((book) => (
          <Card key={book.id} className="p-4">
            {book.coverUrl && (
              <img src={book.coverUrl} alt={book.title} className="w-full h-48 object-cover mb-2" />
            )}
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
```


---

## ⚙️ Configuration .env

```bash
# .env.local
NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY=your_google_api_key
ISBNDB_API_KEY=your_isbndb_key
NYTIMES_API_KEY=your_nytimes_key
```


---

## 🚀 Recommandation finale

**Pour ton projet, utilise:**
1. **Open Library API** comme source principale (gratuite, sans limite)
2. **Google Books API** comme fallback pour les recherches plus précises
3. **NYTimes API** pour les recommandations et best-sellers

Cette approche te donne:
- ✅ Pas de coûts
- ✅ Grande base de données
- ✅ Couvertures de livres
- ✅ Recherche puissante
- ✅ Données riches