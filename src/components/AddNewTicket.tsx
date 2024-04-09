import React from "react";
import { IssueTypes } from "@/types/types";
function AddNewTicket() {
  return (
    <header className="nes-container with-title">
      <h3 className="title">Dates</h3>
      <div className="flex item items-end gap-8">
        <div className="nes-field">
          <label>Start Date</label>
          <input type="date" id="name_field" className="nes-input border" />
        </div>
        <div className="nes-field">
          <label>End Date</label>
          <input type="date" id="name_field" className="nes-input border" />
        </div>
        <div className="nes-select">
          <label htmlFor="sdg">asf</label>
          <select required>
            <option disabled selected>
              Select a ticket
            </option>
            {Object.values(IssueTypes).map((issueType) => (
              <option key={issueType}>{issueType}</option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}

export default AddNewTicket;
