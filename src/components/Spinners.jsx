import { BarLoader } from "react-spinners";

const override = {
    display: 'block',
    margin: '50px auto 50px auto'
}

const Spinner = ({color = 'blue', size = '650'}) => {
    return ( 
        <div>
            <BarLoader
                color={color}
                size={size}
                cssOverride={override}
                area-label="Loading..."
            />
        </div>
     );
}
 
export default Spinner;