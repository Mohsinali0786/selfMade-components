// import { Calender } from "../components/calender/calender";
import CustomCheckbox from "../components/checkbox";
// import DataGridDemo from "../components/grid/grid";
export default function Home(){
    return(
        <div>
            {/* <Calender maxwidth="maxx-width"  dateCount={10}/> */}
            {/* <DataGridDemo/> */}
            <CustomCheckbox 
                defaultChecked={true}
                disabled={false}
                lable="Test"
                required={true}
                color="success"
                colorbeforeChecked="red"
                colorafterChecked="yellow"
                indeterminate={true}
                method={()=>console.log('Clicked')}
                // icon={<BookmarkBorderIcon />}
                // checkedIcon={<BookmarkIcon />}
            />
        </div>
    )
}