import React from 'react';
import './Dogs.css';
import PetsIcon from '@material-ui/icons/Pets';
import { Accordion, Card} from 'react-bootstrap';

const Dogs = ({dogs}) => {
    return (
        <div>
            <h2 className="heading"><PetsIcon fontSize="large"/>  List of Dogs</h2>
            <div className="container-fluid mt-10">
                <div className="row text-center">
                    
                {
                        dogs.map((curElem) => {
                        
                            const { name, id, image, bred_for, breed_group, height, weight, life_span,temperament } = curElem;
                        return (
                                    <div className="col-10 col-md-4 col-sm-6 mt-5" key={id}>
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image"> <img src={ image.url } alt="" className="rounded" height ="120" width="120" /> </div>
                                            <div className=" dogName ml-3 w-100">
                                                
                                                <Accordion>
                                                    <Card>
                                                        <Accordion.Toggle
                                                            as={Card.Header}
                                                            eventKey="0"
                                                            className="p-2 text-center accordian-main"
                                                        >
                                                            <strong><p className="dogName">{name}</p></strong>
                                                        </Accordion.Toggle>

                                                        <Accordion.Collapse eventKey="0" className="text-left">
                                                             <Card.Body>
                                                                 <p><strong>Bred For</strong> : {bred_for} </p>
                                                                 <p><strong>Breed Group</strong> : {breed_group} </p>
                                                                 <p><strong>Height</strong>: {height.imperial} inches </p>
                                                                 <p><strong>Weight</strong> : {weight.imperial} pounds</p>
                                                                 <p><strong>Life Span</strong> : {life_span} </p>
                                                                 <p><strong>Temperament</strong> : {temperament}</p>
                                                             </Card.Body>
                                                        </Accordion.Collapse>
                
                                                    </Card>
                                                </Accordion>    
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                        })        
                }     
                </div>
            </div>
        </div>
    )
}

export default Dogs



