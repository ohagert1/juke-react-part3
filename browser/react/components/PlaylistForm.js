import React from 'react';

const PlaylistForm = ({onSubmit, inputText, onChange, disabled, errors}) => (

  <div className="well">
    <form className="form-horizontal" onSubmit={onSubmit}>
      <fieldset>
        <legend>New Playlist</legend>
        {errors.length?
        <div className="alert alert-warning">{errors[0].message}</div>
        :
        ''
        }
        <div className="form-group">
          <label className="col-xs-2 control-label">Name</label>
          <div className="col-xs-10">
            <input name="name" className="form-control" type="text" value={inputText} onChange={onChange}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button type="submit" className="btn btn-success" disabled={disabled}>Create Playlist</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>

)

export default PlaylistForm;
