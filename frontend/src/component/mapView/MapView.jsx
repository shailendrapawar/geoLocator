import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {

    const users = [
        {
            name: "shailu",
            status: true,
            id: 1,
            coords: {
                lat: 37.7749,
                lon: -122.4194
            }
        }, {
            name: "kanak",
            status: false,
            id: 2,
            coords: {
                lat: 37.7740,
                lon: -122.4180
            }
        },
        {
            name: "sharad",
            status: true,
            id: 3,
            coords: {
                lat: 37.7750,
                lon: -122.4200
            }
        }
    ]


    const createCustomIcon = (name) => {
        return new L.DivIcon({
          className: 'custom-icon',
          html: `<div class="marker-label" style="">${name}</div>`,
          iconSize: [100, 40], // Adjust size as needed
          iconAnchor: [50, 40] // Center the label
        });
      };
      
    console.log(users)
    return (
        <div className='text-black  h-[85%] bg-green-400'>
            <MapContainer center={[37.7749, -122.4194]} zoom={17} style={{
                height: "100%", width: "100%"
            }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                >
                </TileLayer>

                {users.map((user) => (
                    <Marker className=" text-red-500"  key={user.id} position={[user.coords.lat, user.coords.lon]} >
                        <Popup className=' w-[100px]'>
                            <div className='h-5 text-center text-white w-[50px] rounded-md' style={user.status?{backgroundColor:"green"}:{backgroundColor:"red"}}>
                                {user.name}
                            </div>
                        </Popup>
                    </Marker>
                ))}

            </MapContainer>
        </div>
    )
}

export default MapView