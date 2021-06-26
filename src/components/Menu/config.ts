import { MenuEntry } from 'floki-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: `${window.location.origin}/`,
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    // status: {
    //   text: 'MIGRATE',
    //   color: 'warning',
    // },
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: `${window.location.origin}/farms`,
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: `${window.location.origin}/pools`,
  },
  {
    label: 'Oven',
    icon: 'OvenIcon',
    href: '#',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '#',
  },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://flokidoge.com/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://flokidoge.com/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://flokidoge.com/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  {
    label: 'Audits',
    icon: 'AuditsIcon',
    href: '#',
  },
  {
    label: 'Referrals',
    icon: 'ReferralsIcon',
    href: '#',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Contact',
      //   href: 'https://docs.pancakeswap.finance/contact-us',
      // },
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/flokidoge',
      },
      {
        label: 'Docs',
        href: 'https://docs.flokidoge.com',
      },
      // {
      //   label: 'Blog',
      //   href: 'https://pancakeswap.medium.com',
      // },
      // {
      //   label: 'Merch',
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
