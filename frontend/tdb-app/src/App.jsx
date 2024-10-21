import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Topbar from './scenes/global/Topbar'
import CustomSidebar from './scenes/global/CustomSidebar'
import Dashboard from './scenes/dashboard/index'
import { Routes, Route } from 'react-router-dom'
import CommunityChapters from "./scenes/community_chapters"
import Contacts from "./scenes/contacts"
import Form from "./scenes/form"
import FAQ from "./scenes/faq"

function App() {
  const [theme, colorMode] = useMode();


  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <CustomSidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/community-chapters' element={<CommunityChapters />} />
                <Route path='/community-chapters/:chapterName' element={<CommunityChapters />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/form' element={<Form />} />
                <Route path='/faq' element={<FAQ />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>


    </>
  )
}

export default App
