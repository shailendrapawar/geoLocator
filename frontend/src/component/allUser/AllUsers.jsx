import React, { useEffect ,useState} from 'react'
import SingleList from '../singleList/SingleList'
import io from 'socket.io-client';
import { useNavigate } from"react-router-dom";

const socket = io('http://localhost:3000/'); 

const AllUsers = () => {

    const navigate=useNavigate()
    
    const users=[
        {
            name:"shailu",
            status:true,
            id:1,
            coords:{
                lat:37.7749,
                lon:122.4194
            }
        },{
            name:"kanak",
            status:false,
            id:2,
            coords:{
                lat:37.7740,
                long:-122.4180
            }
        },
        {
            name:"sharad",
            status:true,
            id:3,
            coords:{
                lat:37.7750,
                long:-122.4200
            }
        }
    ]



const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    const userId=localStorage.getItem("geolocator/userId")
    if(!userId){
        socket.disconnect();
        navigate("/login")
    }

    // Function to handle position updates
    const handlePosition = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
      // console.log(`Updated Latitude: ${latitude}, Longitude: ${longitude}`);
      socket.emit("updateLocation",location)
    };

    // Function to handle errors
    const handleError = (error) => {
      console.error('Error getting location:', error);
    };

    // Start watching the position
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        handlePosition,
        handleError,
        {
          enableHighAccuracy: true,
          timeout: 500,
          maximumAge: 0
        }
      );

    //   Cleanup on component unmount
      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(()=>{
    // console.log("changed")
    socket.emit("updateLocation",location)
    socket.on("updateAll",(data)=>{
      console.log(data)
    })
  },[location.latitude])

//   console.log(location)


  return (
    <div className='userList-body text-black  h-[85%] flex flex-col gap-1 pt-2 '>
       {
        users.map((user,i)=>{
            return <SingleList key={i} data={user}/>
        })
       }
    </div>
  )
}

export default AllUsers