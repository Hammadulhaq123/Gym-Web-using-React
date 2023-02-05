import React , {useState, useEffect} from 'react'
import { Box, Typography, TextField, Button, Stack } from "@mui/material"

import { exerciseOptions, fetchData } from '../utils/fetchData';
import { FirstPage } from '@mui/icons-material';
import HorizontalScrollbar from '../components/HorizontalScrollbar';

const SearchExercises = () => {


  const [search, setSearch] = useState('')
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://zylalabs.com/api/392/exercise+database+api/310/list+exercise+by+body+part&bodypart=Required', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }
  }, [])



  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://zylalabs.com/api/392/exercise+database+api/309/list+of+body+parts', exerciseOptions);

      console.log(exercisesData);
      const searchedExercises = exercisesData.filter((exercise) => 
        exerciseOptions.name.toLowerCase().includes(search)
        ||exerciseOptions.target.toLowerCase().includes(search)
        ||exerciseOptions.equipment.toLowerCase().includes(search)
        ||exerciseOptions.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);

    }
  }


  return (
    <Stack alignItems="center" justfiyContent="center" p="20px" mt="37px">
      <Typography fontWeight={700} sx={{fontSize: {lg:"44px", xs:"30px"}}} mb="50px" textAlign="center">
        Turn <span className='fatfit'>Fat</span> into <span className='fatfit'>Fit</span>. <br />
        Follow our <span className='fatfit'>Exercise Plan!</span>
      </Typography>
      <Box position="relative" mb="72px">
        <TextField 
        
        sx={{
          input: {fontWeight: '700',
        border: 'none', 
        borderRadius:'4px',
      color:"#046ec4"},
        width: {lg:"800px", xs:"350px"},
        backgroundColor: "rgba(256, 256, 256, 0.1)",
        borderRadius:"4px",
        }}
        
        height="76px"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text"/>
        <Button className='search-btn'
        sx={{
          backgroundColor:"#046ec4", color:"#fff", textTransform:"none", width: {lg:"175px", xs:"80px"}, fontSize: {lg:"20px", xs:"14px"}, height:"56px", position:"absolute",right:"0", borderRadius:"0 4px 4px 0"
        }}
        onClick={handleSearch}
        >Search</Button>
      </Box>
      <Box sx={{position: 'relaive', width:"100%", p:"20px"}}>
          <HorizontalScrollbar data={bodyParts} />
      </Box>
    </Stack>
  )
}

export default SearchExercises
