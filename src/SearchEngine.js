import React from "react";

export default function SearchEngine() {
    let form = (
        <form>
            <input type="search" placeholder="Enter city.."/>
            <button type="Submit">Search</button>
        </form>
    )

    return form;
}