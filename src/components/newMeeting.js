/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import { UserContext } from '../context/User.context';
import '../css/navigation.css';

export const NewMeeting = () => {

    const { serviceURL, meetingURL, businessID } = useContext(UserContext);
    const [service, setService] = useState({});
    const [firstName, setFirstNam] = useState('Joan');
    const [lastName, setLastName] = useState('Dau');
    const [startTime, setStartTime] = useState('2017-05-24T10:30');
    const { id } = useParams();

    useEffect(() => {
        const getBusiness = async () => {
            try {
                const res = await axios.get(serviceURL + `/${id}`);
                console.log(res.data.duration);
                setService(res.data);
            } catch (err) {
                console.log(err)
            }
        }

        getBusiness();
    }, []);

    const saveMeeting = async () => {
        try {
            const res = await axios.post(meetingURL, {

                business_id: businessID,
                start_time: startTime,
                duration: service.duration,
                meeting: {
                    firstName,
                    lastName
                }
            });

            if (res.data.firstName === firstName) {
                window.location.href = "http://localhost:3000/";
            }
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div>
            <Stack component="form" noValidate spacing={3}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            id="datetime-local"
                            label="Next appointment"
                            type="datetime-local"
                            defaultValue={startTime}
                            sx={{ width: 250 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                        <TextField
                            id="outlined-required"
                            label="First Name"
                            defaultValue={firstName}
                            onChange={(e) => setFirstNam(e.target.value)}
                        />
                        <TextField
                            id="outlined-disabled"
                            label="Last Name"
                            defaultValue={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <Button variant="outlined" startIcon={<EventAvailableIcon />} onClick={() => saveMeeting()}>Save</Button>
                </Box>
            </Stack>
        </div>
    )
}


