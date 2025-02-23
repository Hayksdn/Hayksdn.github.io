import { useLocation } from 'react-router-dom'

import {
  BreadcrumbCurrentLink,
  BreadcrumbLink,
  BreadcrumbRoot,
} from '@/components/ui/breadcrumb'

export const BreadCrumb = () => {
  const location = useLocation()
  const pathSegments = location.pathname.split('/').filter((segment) => segment)

  return (
    <BreadcrumbRoot separator='/' separatorGap={3}>
      <BreadcrumbLink href='/myAccount' fontWeight='normal'>
        Home
      </BreadcrumbLink>

      {pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`

        return isLast ? (
          <BreadcrumbCurrentLink key={href} fontWeight='normal'>
            {segment}
          </BreadcrumbCurrentLink>
        ) : (
          <BreadcrumbLink key={href} href={href} fontWeight='normal'>
            {segment}
          </BreadcrumbLink>
        )
      })}
    </BreadcrumbRoot>
  )
}

export const ErrorBreadCrumb = () => {
  const location = useLocation()
  const pathSegments = location.pathname.split('/').filter((segment) => segment)

  return (
    <BreadcrumbRoot separator='/' separatorGap={3}>
      <BreadcrumbLink href='/myAccount' fontWeight='normal'>
        Home
      </BreadcrumbLink>

      <BreadcrumbCurrentLink fontWeight='normal'>
        404 Error
      </BreadcrumbCurrentLink>
    </BreadcrumbRoot>
  )
}
