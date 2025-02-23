import StoreIcon from 'shared/assets/icons/store'
import PaymentsIcon from 'shared/assets/icons/payments'
import RewardsIcon from 'shared/assets/icons/reward'
import SavingsIcon from 'shared/assets/icons/savings'
import WorkerImage1 from 'shared/assets/images/about/workerImage1.png'
import WorkerImage2 from 'shared/assets/images/about/workerImage2.png'

import WorkerImage3 from 'shared/assets/images/about/workerImage3.png'

export const Statistics= [
  {
    id: 1,
    value: "10.5k",
    label: "Sellers active on our site",
    icon: <StoreIcon />,
  },
  {
    id: 2,
    value: "33k",
    label: "Monthly Product Sale",
    icon: <PaymentsIcon />,
  },
  {
    id: 3,
    value: "45.5k",
    label: "Customers active on our site",
    icon: <RewardsIcon />,
  },
  {
    id: 4,
    value: "25k",
    label: "Annual gross sale on our site",
    icon: <SavingsIcon />,
  },
];

export const Workers = [
  {
    image: WorkerImage1,
    name: "Tom Cruise",
    position: "Founder & Chairman",
    instagram: "https://instagram.com/johndoe",
    twitter: "https://twitter.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
  },
  {
    image: WorkerImage2,
    name: "Emma Watson",
    position: "Managing Director",
    instagram: "https://instagram.com/janesmith",
    twitter: "https://twitter.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    image: WorkerImage3,
    name: "Will Smith",
    position: "Product Designer",
    instagram: "https://instagram.com/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
  },
];