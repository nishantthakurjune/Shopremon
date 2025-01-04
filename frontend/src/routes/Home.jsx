
import {Link} from 'react-router'
const Home = () => {
  return (
    <div className="h-screen flex flex-col mt-20 ml-4">
      <div className="text-3xl pb-2">Find your product with ease</div>
      <div className="text-xl pb-2">Shopremon will help you find your product easy
        and comfortable.
      </div>
      <Link to='/collections'>
      <div className="text-blue-700">Lets Start now...</div>
      </Link>
      <div></div>
    </div>
  )
}

export default Home