import { Box, } from "@mui/system";
import {CustomButton} from './buttons'
import { BasicTextFields, TestInput } from "./inputs/input";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomCheckbox from "./checkbox";

export function DynamicForm({type , formElements}){
    return(
        // <Container>
        //       <Box
        //             component="form"
        //             sx={{
        //                 '& > :not(style)': { m: 1, width: '25ch' },
        //             }}
        //             noValidate
        //             autoComplete="off"
        //             // className="row"
        //         >
                    <Container fluid>
                        <Row className="mtext-left">
                            {
                            formElements.map((x)=>{
                                return(
                                    x.elementType == "button" ? 
                                    <Col md={x.columns} className="my-3">
                                        <CustomButton 
                                            label={x.label} //required
                                            variant={x.variant} //required
                                            type={x.type}  //required
                                            disabled={x.disabled} 
                                            iconName={x.iconName}
                                            onChanged={x.onChanged}
                                            color={x.color} //success || secondary || error
                                            iconPosition={x.iconPosition}
                                            className={x.className}
                                        />
                                    </Col>
                                    :
                                    x.elementType == 'input' ? 
                                    <Col md={x.columns} className="my-3">
                                        <BasicTextFields 
                                            id="outlined-basic"
                                            classes="" 
                                            required={x.required} 
                                            variant={x.variant} 
                                            label={x.label}
                                            defaultText={x.defaultText}
                                            type={x.type}
                                            icon={x.icon} //<AccountCircle/> || text
                                            // value={x.key}
                                            name={x.key}
                                            fullWidth={x.fullWidth}
                                        />
                                    </Col>
                                    :
                                    x.elementType == 'checkbox' ? 
                                    <Col msd={x.columns} className="my-3">
                                    
                                        <CustomCheckbox 
                                            defaultChecked={x?.defaultChecked}  //true||false
                                            color={x?.color} // success || secondary || default
                                            sx={{color:x?.colorbeforeChecked, '&.Mui-checked': {   //any color with class
                                                color: x?.colorafterChecked,
                                            },
                                            }}
                                            icon={x?.icon}
                                            name={x?.label?.toLowerCase()}
                                            value={x?.label?.toLowerCase()}
                                            checkedIcon={x?.checkedIcon}
                                            indeterminate={x?.indeterminate}
                                            onChange={x?.onChange}
                                            error={[x?.error]}
                                            disabled={x?.disabled}
                                            required={x?.required}
                                            label={x?.label}
                                        />
                                </Col>
                                :
                                    null
                                )
                            })
                            }
                        </Row>
                    </Container>
        //     </Box>
        // </Container>
    )

} 
export function TestDynamicForm(){
    let formElements =[
        {
            columns:4,
            elementType:'button',
            label:'Click Me',
            key:"",
            variant:"outlined",
            type:'text'
        },
        {
            columns:4,
            elementType:'input',
            label:'Name',
            key:"name",
            variant:"outlined",
            type:'text',
            fullWidth:true,
        },
        {
            columns:4,
            elementType:'input',
            label:'Password',
            key:"name",
            variant:"outlined",
            type:'password',
            fullWidth:true,

        },
        {
            columns:4,
            elementType:'button',
            label:'Click Me',
            key:"",
            variant:"outlined",
            type:'text'
        },
        {
            columns:4,
            elementType:'input',
            label:'Name',
            key:"name",
            variant:"outlined",
            type:'text',
            fullWidth:true,

        },
        {
            columns:4,
            elementType:'input',
            label:'Password',
            key:"name",
            variant:"outlined",
            type:'password',
            fullWidth:true,

        },
        {
            column:3,
            elementType:'checkbox',
            label:'Test'
        }
    ]
    return(
        <>
        <DynamicForm formElements={formElements}/>
        {/* <TestInput/> */}
                                          
        </>
    )
}