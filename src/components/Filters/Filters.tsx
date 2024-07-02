import React from "react";
import {type TASK_FILTER, FOOTER_FILTERS_BUTTONS } from "../../consts";
import { type FilterValue } from "../../types";

interface Props{
    filterSelected: FilterValue
    onFilterChange: (filter: FilterValue)=> void
}

export const Filters: React.FC<Props> =({ filterSelected, onFilterChange})=>{

    return(
        <ul className="filters">
            {
             Object.entries(FOOTER_FILTERS_BUTTONS).map(([key, {href, literal}])=>{
                const isSelected = key === filterSelected
                const clasName = isSelected? 'selected' : ''
                return (
                    <li key={key}>
                        <a
                            href={href}
                            className={clasName}
                            onClick={(event)=>{
                                event.preventDefault()
                                onFilterChange(key as FilterValue)
                            }}
                        >
                                {literal}
                        </a>
                    </li>
                )
             })   
            }            
        </ul>    
    )



}