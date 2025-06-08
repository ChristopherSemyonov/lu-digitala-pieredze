document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const savedTheme = localStorage.getItem('theme')
  let theme = savedTheme || (prefersDark ? 'dark' : 'light')

  document.documentElement.setAttribute('data-theme', theme)
  btn.textContent = theme === 'dark' ? '🌙' : '☀️'

  btn.addEventListener('click', () => {
    theme =
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'light'
        : 'dark'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    btn.textContent = theme === 'dark' ? '🌙' : '☀️'
  })
})
