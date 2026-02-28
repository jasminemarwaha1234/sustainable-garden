export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  type: 'tree' | 'shrub' | 'flower' | 'grass' | 'succulent';
  nativeTo: string[];
  waterUsage: 'low' | 'medium' | 'high';
  sunExposure: 'full' | 'partial' | 'shade';
  image: string;
  sustainabilityBoost: number;
}

export const PLANTS: Plant[] = [
  {
    id: '1',
    name: 'California Poppy',
    scientificName: 'Eschscholzia californica',
    type: 'flower',
    nativeTo: ['Irvine', 'California', 'Southwest'],
    waterUsage: 'low',
    sunExposure: 'full',
    image: 'https://images.unsplash.com/photo-1596481600109-7d078a635848?q=80&w=256&auto=format&fit=crop',
    sustainabilityBoost: 15,
  },
  {
    id: '2',
    name: 'Coast Live Oak',
    scientificName: 'Quercus agrifolia',
    type: 'tree',
    nativeTo: ['Irvine', 'California', 'Pacific Coast'],
    waterUsage: 'low',
    sunExposure: 'full',
    image: 'https://images.unsplash.com/photo-1613143585387-ec86f0340325?q=80&w=256&auto=format&fit=crop',
    sustainabilityBoost: 25,
  },
  {
    id: '3',
    name: 'White Sage',
    scientificName: 'Salvia apiana',
    type: 'shrub',
    nativeTo: ['Irvine', 'California', 'Baja California'],
    waterUsage: 'low',
    sunExposure: 'full',
    image: 'https://images.unsplash.com/photo-1603504381014-99890ed62635?q=80&w=256&auto=format&fit=crop',
    sustainabilityBoost: 20,
  },
  {
    id: '4',
    name: 'Dudleya Pulverulenta',
    scientificName: 'Chalk Dudleya',
    type: 'succulent',
    nativeTo: ['Irvine', 'California'],
    waterUsage: 'low',
    sunExposure: 'partial',
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=256&auto=format&fit=crop',
    sustainabilityBoost: 18,
  },
  {
    id: '5',
    name: 'Toyon',
    scientificName: 'Heteromeles arbutifolia',
    type: 'shrub',
    nativeTo: ['Irvine', 'California'],
    waterUsage: 'low',
    sunExposure: 'partial',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=256&auto=format&fit=crop',
    sustainabilityBoost: 15,
  },
  {
    id: '6',
    name: 'Blue Eyed Grass',
    scientificName: 'Sisyrinchium bellum',
    type: 'grass',
    nativeTo: ['Irvine', 'California'],
    waterUsage: 'medium',
    sunExposure: 'full',
    image: 'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=256&auto=format&fit=crop',
    sustainabilityBoost: 12,
  },
];

export const CLIMATE_ZONES = [
  'Irvine',
  'San Diego',
  'Los Angeles',
  'San Francisco',
  'Phoenix',
  'Denver'
];

export const GARDEN_SIZES = [
  { label: '5ft x 5ft', width: 5, height: 5 },
  { label: '10ft x 10ft', width: 10, height: 10 },
  { label: '15ft x 15ft', width: 15, height: 15 },
  { label: '20ft x 10ft', width: 20, height: 10 },
];
