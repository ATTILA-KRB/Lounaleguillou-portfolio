import { ref, watch } from 'vue'

const STORAGE_KEY = 'theme'

function getInitialDark() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'dark') return true
  if (saved === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const isDark = ref(getInitialDark())

function applyTheme() {
  document.documentElement.classList.toggle('dark', isDark.value)
}

applyTheme()

watch(isDark, () => {
  applyTheme()
  localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light')
})

export function useTheme() {
  function toggle() {
    isDark.value = !isDark.value
  }

  return { isDark, toggle }
}
