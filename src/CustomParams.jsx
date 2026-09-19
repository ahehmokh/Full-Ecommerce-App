import { useParams } from "react-router-dom";
const CustomParams = () => {
    const id = useParams()
    return  (id);
}
 
export default CustomParams;