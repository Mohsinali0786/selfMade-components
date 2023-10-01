import { Box, } from "@mui/system";
import {CustomButton} from './buttons'
import { BasicTextFields, TestInput } from "./inputs/input";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomCheckbox from "./checkbox";
import {CustomRadioButtons} from "./radioButtons";
import { ComboBox } from "./autocomplete";
import {Customselect} from './select'
import { MultipleSelectCheckmarks } from "./multiselect";

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
                                    <Col md={x.columns} className="my-3">
                                    
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
                                    x.elementType == 'radiobutton' ?
                                    <Col md={x.columns} className="my-3 mtext-left">
                                        <CustomRadioButtons 
                                            label={x.label} 
                                            data={x.datasource} 
                                            defaultValue={x.defaultValue} 
                                            handleChange={x.onChange}
                                        />
                                    </Col>
                                    :
                                    x.elementType == 'autocomplete' ?
                                    <Col md={x.columns} className="my-3 mtext-left">
                                        <ComboBox 
                                            autoHighlight={x.autoHighlight}
                                            autoSelect={x.autoSelect}
                                            className={x.className}
                                            clearOnEscape={x.clearOnEscape}
                                            disableClearable={x.disableClearable}
                                            disabled={x.disabled}
                                            fullWidth={x.fullWidth}
                                            multiple={x.multiple}
                                            onChange={x.onChange}
                                            label={x.label}
                                            datasource={x.datasource}
                                        />
                                    </Col>
                                    :
                                    x.elementType == 'select' ?
                                    <Col md={x.columns} className="my-3 mtext-left">
                                          <Customselect 
                                            required={x.required} 
                                            label={x.label} 
                                            value={x.value} 
                                            size={x.size} 
                                            fullWidth={x.fullWidth} 
                                            data={x.datasource}
                                            autoWidth={x.autoWidth}
                                        />
                                    </Col>
                                    :
                                    x.elementType == 'multiSelect' ?
                                    <Col md={x.columns} className="my-3 mtext-left">
                                          <MultipleSelectCheckmarks 
                                            required={x.required} 
                                            label={x.label} 
                                            value={x.value} 
                                            size={x.size} 
                                            fullWidth={x.fullWidth} 
                                            data={x.datasource}
                                            autoWidth={x.autoWidth}
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
            columns:3,
            elementType:'checkbox',
            label:'Test'
        },
        {
            columns:3,
            elementType:'radiobutton',
            label:'Test',
            datasource:[{id:1,name:'male'},{id:2,name:'female'},]
        },
        {
            columns:3,
            elementType:'autocomplete',
            label:'Test',
            datasource:[  { name: 'The Shawshank Redemption', id: 1994 },
            { name: 'The Godfather', id: 1972 },],
        },
        {
            columns:3,
            elementType:'select',
            label:'Test',
            datasource:[  { name: 'The Shawshank Redemption', id: 1994 },
            { name: 'The Godfather', id: 1972 },],
            fullWidth:true
        },
        {
            columns:3,
            elementType:'multiSelect',
            label:'Test',
            datasource:[  { name: 'The Shawshank Redemption', id: 1994 },
            { name: 'The Godfather', id: 1972 },],
            isChipStyle:false 
        },
    ]
    return(
        <>
        <DynamicForm formElements={formElements}/>
        {/* <TestInput/> */}
                                          
        </>
    )
}