import { Checkbox } from "./Checkbox";
import { Input } from "./Input";

/* eslint-disable react/prop-types */
export function SearchBar ({showStockedOnly,onStockedOnlyChange, search, onSearchChange}) {
    return <div>
      <div className="mb-3">
        <Input value={search} onChange={onSearchChange} placeholder="Search..."/>
        <Checkbox id="stocked" checked={showStockedOnly} onChange={onStockedOnlyChange} label="N'aficher que les produits en stock"/>
      </div>
    </div>
  }