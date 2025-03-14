import { useState } from 'react'

import { useAuthActions } from '@/shared/api/auth'
import { CustomContainer } from '@/shared/components/layout/container'
import { useCart } from '@/shared/context/Cart/CartContext'
import { useUser } from '@/shared/context/user/userContext'
import { useWishList } from '@/shared/context/wishList/wishListContext'
import { Box, Button, Flex, Input, List, Text } from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom'
import AccountIcon from 'shared/assets/icons/account'
import CancellationsIcon from 'shared/assets/icons/cancellations'
import CartIcon from 'shared/assets/icons/cart'
import HeartIcon from 'shared/assets/icons/heart'
import LogoutIcon from 'shared/assets/icons/logout'
import OrdersIcon from 'shared/assets/icons/orders'
import ReviewsIcon from 'shared/assets/icons/reviews'
import SearchIcon from 'shared/assets/icons/search'

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu'

import css from './navbar.module.css'

export const Navbar = () => {
  const { user } = useUser()
  const { handleLogout } = useAuthActions()

  const { activeCartItems } = useCart()
  const { activeWishListItems } = useWishList()

  const location = useLocation()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navbarLinks = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'Contact', url: 'contact' },
    { id: 3, name: 'About', url: 'about' },
    { id: 4, name: 'Sign Up', url: '/signup' },
  ]

  const accountMenu = [
    {
      id: 1,
      icon: <AccountIcon />,
      name: 'Manage My Account',
      url: '/myAccount',
    },
    { id: 2, icon: <OrdersIcon />, name: 'My Order', url: '/' },
    { id: 3, icon: <CancellationsIcon />, name: 'My Cancellations', url: '/' },
    { id: 4, icon: <ReviewsIcon />, name: 'My Reviews', url: '/' },
    { id: 5, icon: <LogoutIcon />, name: 'Logout', url: '/' },
  ]

  return (
    <Flex
      w='full'
      h='fit-content'
      flexDir='column'
      justify='space-between'
      borderBottom='0.03125rem solid'
      borderColor='var(--chakra-colors-primary-black)/30'
    >
      <CustomContainer
        variant='container'
        mx='auto'
        display='flex'
        flexDir='row'
        justifyContent='space-between'
        mt='1.75rem'
        mb='1rem'
        className={css.navbar}
        w='full'
      >
        <Flex alignItems='center' flexDir='row' gap='12rem'>
          <NavLink to='/'>
            <Text
              fontFamily='Inter'
              color='var(--chakra-colors-primary-black)'
              fontSize='1.5rem'
              fontWeight='bold'
            >
              Exclusive
            </Text>
          </NavLink>
          <List.Root
            flexDir='row'
            gap='3rem'
            fontSize='1rem'
            listStyleType='none'
          >
            {navbarLinks.map((link) => {
              return (
                <List.Item key={link.id}>
                  <NavLink
                    to={link.url}
                    className={({ isActive }) => (isActive ? css.active : '')}
                    color=' var(--chakra-colors-primary-black)'
                  >
                    {link.name}
                  </NavLink>
                </List.Item>
              )
            })}
          </List.Root>
        </Flex>
        <Flex flexDir='row' gap='1.3rem'>
          <Flex alignItems='center' position='relative'>
            <Input
              type='text'
              placeholder='What are you looking for?'
              w='15.5rem'
              h='2.375rem'
              rounded='md'
              bg='var(--chakra-colors-primary-grey)'
              fontSize='0.75rem'
              pl='1.25rem'
              position='relative'
              cursor='pointer'
              _focus={{
                outline: 'none',
                border: 'none',
              }}
            />
            <Button background='none' position='absolute' right='0.3rem'>
              <SearchIcon width='1.5rem' height='1.5rem' />
            </Button>
          </Flex>
          {location.pathname === '/login' ||
          location.pathname === '/signup' ? null : (
            <List.Root flexDir='row' gap='1.3rem' alignItems='center'>
              <NavLink to='/wishList'>
                <Flex h='fit-content' position='relative'>
                  <HeartIcon width='2rem' height='2rem' />

                  {Object.keys(activeWishListItems).length > 0 && (
                    <Box
                      position='absolute'
                      textAlign='center'
                      right={0}
                      w='1rem'
                      h='1rem'
                      fontSize='0.75rem'
                      bg='var(--chakra-colors-primary-orange)'
                      rounded='full'
                      color='var(--chakra-colors-primary-white)'
                    >
                      {Object.keys(activeWishListItems).length}
                    </Box>
                  )}
                </Flex>
              </NavLink>

              <NavLink to='/cart'>
                <Flex h='fit-content' position='relative'>
                  <CartIcon />

                  {Object.keys(activeCartItems).length > 0 && (
                    <Box
                      position='absolute'
                      textAlign='center'
                      right='-0.25rem'
                      top='-0.25rem'
                      w='1rem'
                      h='1rem'
                      fontSize='0.75rem'
                      bg='var(--chakra-colors-primary-orange)'
                      rounded='full'
                      color='var(--chakra-colors-primary-white)'
                    >
                      {Object.keys(activeCartItems).length}
                    </Box>
                  )}
                </Flex>
              </NavLink>

              {user && (
                <NavLink
                  to='/myAccount'
                  className={({ isActive }) =>
                    isActive ? css.activeProfileIcon : ''
                  }
                >
                  <MenuRoot
                    open={isMenuOpen}
                    onOpenChange={(event) => setIsMenuOpen(event.open)}
                  >
                    <MenuTrigger asChild>
                      <Box
                        rounded='50%'
                        p={1}
                        className={css.profileIcon}
                        onMouseEnter={() => setIsMenuOpen(true)}
                      >
                        <AccountIcon />
                      </Box>
                    </MenuTrigger>
                    <MenuContent
                      p='1rem'
                      bg='#0000000A'
                      backdropFilter='blur(50px)'
                    >
                      {accountMenu.map((menu) => {
                        if (menu.name === 'Logout') {
                          return (
                            <MenuItem
                              value={menu.name}
                              key={menu.id}
                              _hover={{ bg: 'none', border: 'none' }}
                              cursor='pointer'
                            >
                              <Flex
                                flexDir='row'
                                gap='1rem'
                                alignItems='center'
                                onClick={() => handleLogout()}
                              >
                                {menu.icon}
                                <Text>{menu.name}</Text>
                              </Flex>
                            </MenuItem>
                          )
                        } else {
                          return (
                            <MenuItem
                              value={menu.name}
                              key={menu.id}
                              _hover={{ bg: 'none', border: 'none' }}
                              cursor='pointer'
                            >
                              <Flex
                                flexDir='row'
                                gap='1rem'
                                alignItems='center'
                              >
                                {menu.icon}
                                <NavLink
                                  to={menu.url}
                                  color='var(--chakra-colors-primary-white)'
                                >
                                  {menu.name}
                                </NavLink>
                              </Flex>
                            </MenuItem>
                          )
                        }
                      })}
                    </MenuContent>
                  </MenuRoot>
                </NavLink>
              )}
            </List.Root>
          )}
        </Flex>
      </CustomContainer>
    </Flex>
  )
}
