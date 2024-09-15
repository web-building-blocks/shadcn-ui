import * as React from "react";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { Input } from "@/registry/default/ui/input"

export function InputNumber() {
  const [selectedCountry, setSelectedCountry] = React.useState("+61");

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };
  return (
    <DropdownMenu>
      <Input type="number" placeholder="Enter Amount" style={{ width: '25%' }} />
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{selectedCountry}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuCheckboxItem
          checked={selectedCountry === "US"}
          onCheckedChange={() => handleCountrySelect("+1")}
        >
          United States (+1)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedCountry === "UK"}
          onCheckedChange={() => handleCountrySelect("+44")}
        >
          United Kingdom (+44)
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={selectedCountry === "AUS"}
          onCheckedChange={() => handleCountrySelect("+61")}
        >
          Australia (+61)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedCountry === "CHN"}
          onCheckedChange={() => handleCountrySelect("+86")}
        >
          China (+86)
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>



    </DropdownMenu>

  )

}
export default InputNumber;
