import { StrictMode } from 'react'

import { Provider as ChakraUiProvider } from 'components/ui/provider'
import ReactDOM from 'react-dom/client'

import App from './app/app'
import './global.css'
import { Cart } from './shared/context/Cart/Cart'
import { WishList } from './shared/context/wishList/wishList'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <ChakraUiProvider>
      <Cart>
        <WishList>
          <App />
        </WishList>
      </Cart>
    </ChakraUiProvider>
  </StrictMode>
)
