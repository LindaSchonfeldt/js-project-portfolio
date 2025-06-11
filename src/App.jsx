import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyle'
import HomePage from './pages/HomePage'
import { CaseStudyPage } from './pages/CaseStudyPage'
import { ArticlePage } from './pages/ArticlePage'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/case-study/:id' element={<CaseStudyPage />} />
          <Route path='/article/:id' element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
