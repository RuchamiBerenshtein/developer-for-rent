import React, {useState} from 'react';
import '../css/manager.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const save=()=>{

}

export const ServicesManagement = () => {
    const [style,setStyle]=useState("add-service-disable");
    const addService=() => {
        setStyle("container");
    }
    return (
        <div className="body-manager">
            <h1>ServicesManagement!!!</h1>
            {/* here will be all the services */}

            <div className="form-group btn-container">
                <input type="button" className="form-control button-a" id="addServiceBtn" value="Add new service" onClick={()=>addService()}></input>
            </div>
            <div className={style}>
                 <div className="form-group">
                     <input type="text" className="form-control" placeholder="service name" id="serviceName"></input>
                 </div>
                 <div className="form-group">
                     <input type="number" className="form-control" placeholder="number of meetings" id="numOfMeetings"></input>
                 </div>
                 <div className="form-group">
                     <input type="text" className="form-control" placeholder="duration of meeting" id="durationOfMeeting"></input>
                 </div>
                 <div className="form-group">
                     <input type="money" className="form-control" placeholder="cost prive" id="cost"></input>
                 </div>
                 <div className="form-group">
                     <input type="text" className="form-control" placeholder="opening hours" id="openingHours"></input>
                 </div>
                 <div className="form-group">
                    <label>address</label>
                     <input type="text" className="form-control" placeholder="city" id="city"></input>
                 </div>
                 <div className="form-group">
                     <input type="text" className="form-control" placeholder="street" id="street"></input>
                 </div>
                 <div className="form-group">
                     <input type="number" className="form-control" placeholder="house number" id="number"></input>
                 </div>
                 <div className="form-group">
                    <input type="button" className="form-control button-a" id="saveService" value="save" onClick={()=>save()}></input>
                 </div>
            </div>
            
        </div>
    )
}


