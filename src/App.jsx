import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GlobalStyle } from './GlobalStyle'
import { ArticlePage } from './pages/ArticlePage'
import { CaseStudyPage } from './pages/CaseStudyPage'
import HomePage from './pages/HomePage'

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
