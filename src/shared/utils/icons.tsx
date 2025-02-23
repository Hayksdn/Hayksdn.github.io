import FiveStarIcon from 'shared/assets/icons/fiveStar'
import FourAndHalfIcon from 'shared/assets/icons/fourAndHalf'
import FourStarIcon from 'shared/assets/icons/fourStar'

export const GetRatingIcon = (rating: string) => {
  switch (rating) {
    case 'five-star':
      return <FiveStarIcon />
    case 'four-and-half-star':
      return <FourAndHalfIcon />
    case 'four-star':
      return <FourStarIcon />
    default:
      return null
  }
}
