import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';

import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';




export default function ToDo(){
    return (
    <>

        <Card className='todoCard' sx={{ minWidth: 275 ,background:"#283593",color:"white",marginTop:5}}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid size={8}>
                        <Typography variant='h6' sx={{textAlign:"left"}} >
                            Task
                        </Typography>
                        <Typography variant='h5' sx={{textAlign:"left"}} >
                            Details
                        </Typography>
                    </Grid>
                    {/* icons */}
                    <Grid size={4} sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <IconButton className='iconButton' size="small" sx={{background:"white",color:"#8bc34a",border:"solid #8bc34a 3px"}}>
                            <CheckIcon/>
                        </IconButton>

                        <IconButton className='iconButton' size="small" sx={{background:"white",color:"#1769aa",border:"solid #1769aa 3px"}}>
                            <ModeEditIcon/>
                        </IconButton>

                        <IconButton className='iconButton' size="small" sx={{background:"white",color:"#b23c17",border:"solid #b23c17 3px"}}>
                            <DeleteIcon/>
                        </IconButton>
                        
                    </Grid>
                   
                </Grid>
                
            </CardContent>
        </Card>


    </>

    );
}