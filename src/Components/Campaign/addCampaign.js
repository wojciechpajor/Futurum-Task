import "./addCampaign.css"
import React, { useState, useEffect, Fragment } from 'react';
import firebase from "../../firebase"

const AddCampaign = () => {
    const [name, setName] = useState('');
    const [keywords, setKeywords] = useState('');
    const [bidAmount, setBidAmount] = useState('');
    const [campaignFunds, setCampaignFunds] = useState('');
    const [status, setStatus] = useState('');
    const [town, setTown] = useState('');
    const [radius, setRadius] = useState('');
    const [campaign, setCampaign] = useState(name, keywords, bidAmount, campaignFunds, status, town, radius);

    const ref = firebase.firestore().collection('Beers')




        return (
            <div class="addCampaignStyle">
                <input required type="text" class="input" placeholder="Campaign name"
                       onChange={(e) => setName(e.target.value)}></input>
                <input type="text" class="input" placeholder="Campaign keywords"
                       onChange={(e) => setKeywords(e.target.value)}/>
                <input type="text" class="input" placeholder="Campaign Bid Amount"
                       onChange={(e) => setBidAmount(e.target.value)}/>
                <input type="number" class="input" placeholder="campaign Funds"
                       onChange={(e) => setCampaignFunds(e.target.value)}/>
                <input type="text" class="input" placeholder="Status" onChange={(e) => setStatus(e.target.value)}/>
                <input type="text" className="input" placeholder="Town"
                       onChange={(e) => setTown(e.target.value)}/>
                <input type="text" className="input" placeholder="Radius"
                       onChange={(e) => setRadius(e.target.value)}/>
                <button className="buttonStyle">Add</button>
            </div>


        )


}

export default AddCampaign;