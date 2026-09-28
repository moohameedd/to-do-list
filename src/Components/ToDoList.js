import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToDo from "./ToDo";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {v4 as uuidv4} from 'uuid';

import { useState } from 'react';





const initalTodos = [
  {id:uuidv4,title:"read a book",details:"3 pages",isCompleted:false},
  {id:uuidv4,title:"read a book",details:"3 pages",isCompleted:false},
  {id:uuidv4,title:"read a book",details:"3 pages",isCompleted:false},

]




export default function ToDoList() {
  const [todos,setTodos] = useState(initalTodos);
  const [titleInput,setTitleInput] = useState("");
  const todosJsx = todos.map((t)=>{
    return <ToDo key={t.id} titile={t.title} details={t.details}/>;
  })

  function handleAddClick(){
    const newTodo = {
      id:uuidv4(),
      title:titleInput,
      details:"",
      isCompleted:false
    }
    setTodos([...initalTodos,newTodo]);
    setTitleInput("");
  }
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
            {todosJsx}
            
          {/* input + add button*/}
          <Grid container style={{marginTop:"20px"}}spacing={2}>
            <Grid size={8} style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                  <TextField style={{width:"100%"}} id="outlined-basic" label="title" variant="outlined" value={titleInput} onChange={(e)=>{
                    setTitleInput(e.target.value);
                  }} />
                        
            </Grid>
            <Grid size={4} style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                      <Button variant="contained" style={{width:"100%",height:"100%"}} onClick={()=>{
                        handleAddClick()
                      }}>Add</Button>
            </Grid>

          </Grid>
      </CardContent>
      
    </Card>
    
    </Container>
    
  );
}