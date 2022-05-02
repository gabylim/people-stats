import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const SearchFilter = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  function onSubmit(data) {
    // On met à jour les données du filtre
    dispatch({
      type: 'filter/update',
      filter: data
    });
    // On réinitialise la page courante
    dispatch({
      type: 'initialPage/update',
      initialPage: 0
    });
    // On réinitialise l'échelle de données minimum
    dispatch({
      type: 'itemOffSet/update',
      itemOffSet: 0
    });
  }
  return (<div className='d-flex justify-content-center'>
            <Form className="d-flex mt-5" onSubmit={handleSubmit(onSubmit)}>
                <Form.Select {...register('gender')} aria-label="Default select example">
                    <option>Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </Form.Select>
                <Form.Control type="text" placeholder='City' {...register('city')}/>
                <Form.Control type="text" placeholder='State' {...register('state')} />
                <Form.Control type="text" placeholder='first name' {...register('nameFirst')} />
                <Form.Control type="text" placeholder='last name' {...register('nameLast')}/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>);
};

export default SearchFilter;
