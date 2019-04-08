import React from 'react';
import './search-panel.css';
import TextField from '@material-ui/core/TextField';

const SearchPanel = () => {
return (
        <div class="input-field search-panel">
          <textarea id="textarea1" class="materialize-textarea"  placeholder = "Type text"></textarea>
        </div>
);
};

export default SearchPanel;
