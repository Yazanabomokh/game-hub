import platforms from '../data/Platforms'
interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => ({data: platforms, error: null})

export default usePlatforms;