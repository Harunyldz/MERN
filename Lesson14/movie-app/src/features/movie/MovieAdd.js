import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createMovie, fetchMovieById, updateMovie, clearSelectedMovie } from './movieSlice';
import { useNavigate, useParams } from 'react-router-dom'
import { Grid, Image, Button, Form, GridColumn, Header } from 'semantic-ui-react'

const blankImage='https://react.semantic-ui.com//images/wireframe/image.png'
export default function MovieAdd() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const selectedMovie = useSelector(state => state.movies.selectedMovie)
  const [coverImage, setCoverImage] = useState()

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieById(id))
      .then((response)=>{
        if(response.payload){
          setCoverImage(response.payload.avatar)
        }
      })
      selectedMovie?.avatar&& setCoverImage(selectedMovie.avatar)
    }
    else{
      setCoverImage(blankImage)
    }
    return () => {
      dispatch(clearSelectedMovie())
    }
  },[dispatch, id])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const newMovie = {
      title: formData.get('title'),
      category: formData.get('category'),
      year: formData.get('year'),
      imdb_score: formData.get('imdb_score'),
      avatar: formData.get('avatar'),
      country: formData.get('country'),
      createdAt: new Date().toISOString()
    }
    if (newMovie.title && newMovie.avatar) {
      if (id) {
        dispatch(updateMovie({ ...newMovie, id }))
      }
      else {
        dispatch(createMovie(newMovie))
      }
      form.reset() //clear form
      navigate('/List')
    }
    else {
      alert('Please fill in the blanks')
    }


  }

  return (
      <Grid>
        <GridColumn width={16}>
          <Header as='h1' textAlign='center' color='teal'>Movie Add</Header>
        </GridColumn>
        <Grid.Column width={4}>
          {/* <Image src='https://react.semantic-ui.com//images/wireframe/image.png' /> */}
          <Image src={coverImage}/>
        </Grid.Column>
        <Grid.Column width={12}>
          <Form>
            <Form.Field>
              <label>Title</label>
              <input type='text' name='title' placeholder='Title' defaultValue={selectedMovie && selectedMovie.title} />
            </Form.Field>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Category</label>
                <input type='text' name='category' placeholder='Category' defaultValue={selectedMovie && selectedMovie.category} />
              </Form.Field>
              <Form.Field>
                <label>Country</label>
                <input type='text' name='country' placeholder='Country' defaultValue={selectedMovie && selectedMovie.country} />
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Year</label>
                <input type='text' name='year' placeholder='Year' defaultValue={selectedMovie && selectedMovie.year} />
              </Form.Field>
              <Form.Field>
                <label>IMDB Score</label>
                <input type='text' name='imdb_score' placeholder='IMDB Score' defaultValue={selectedMovie && selectedMovie.imdb_score} />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label>Avatar</label>
              <input type='text' name='avatar' placeholder='Cover URL' onChange={(e) => setCoverImage(e.target.value)} defaultValue={selectedMovie && selectedMovie.avatar} />
            </Form.Field>
            <Button type='submit' onSubmit={handleSubmit} floated='right'>{selectedMovie && selectedMovie.id ? "Update Movie" : "Add Movie"}</Button>
          </Form>
        </Grid.Column>
      </Grid>
  )
}
