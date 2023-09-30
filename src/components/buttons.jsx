import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export function CustomButton({
    label,
    variant,
    onChanged,
    color,
    disabled,
    iconPosition,
    iconName,
    type,
    className,
    size

}){
 return(
    <>
    {
        type == "iconText" || type == "text" ?
            <Button 
                variant={variant} 
                disabled={disabled} 
                onClick={onChanged}
                color={color}
                startIcon={iconPosition == "start" ? iconName : null}
                endIcon={iconPosition == "end" ? iconName : null}
                iconPosition={iconPosition}
                className={className}
            >
                {label}
            </Button>
            :
            type == "upload" ?
            <Button component="label" variant={variant} className={className} startIcon={<CloudUploadIcon />}>
                Upload file
                <VisuallyHiddenInput type="file" />
            </Button>
            :
            <IconButton color={color} className={className}  size={size}>
                {iconName}
           </IconButton>
    }
    </>
 )   
}
export function TestButton(){
    return(
        <CustomButton 
            variant="outlined" 
            label="Test" 
            // disabled={true} 
            iconName={<DeleteIcon />}
            onChanged={()=>console.log('Hello')}
            color="success" //success || secondary || error
            iconPosition="start"
            type="upload"
            className="red"
        />   
    )
}