import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToDo from "./ToDo";



export default function SimpleContainer() {
  return (
    
    <Container maxWidth="sm">
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h2' >
          To-Do List
        </Typography>
        <Divider/>
        {/* filter button */}

                <ToggleButtonGroup
            /*value={alignment}*/
            exclusive
            /*onChange={handleAlignment}*/
            aria-label="text alignment" style={{marginTop:"30px"}}
            >
            <ToggleButton value="left" >
                all
            </ToggleButton>
            <ToggleButton value="center" >
                done
            </ToggleButton>
            <ToggleButton value="right">
                not done
            </ToggleButton>
            
            </ToggleButtonGroup>
            {/* to do component */}
            <ToDo/>
        
      </CardContent>
      
    </Card>
    
    </Container>
    
  );
}