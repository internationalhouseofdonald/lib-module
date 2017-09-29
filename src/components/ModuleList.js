import { PropTypes } from 'prop-types';

// Side-Note: The name of this parameter must match the attribute of the tag that renders it (in this case, the ModuleList tag in App.js's render() method has an attribute named "modules")
export const ModuleList = ({modules}) => (
  <div className="moduleList">
    {modules.map((module, i) =>
      <div key={i}>
        <h2>
          {module.module}
        </h2>
        <p>
          {module.description}
        </p>
      </div>
    )}
  </div>
)
ModuleList.PropTypes = {
  list: function(props) {
		if(!Array.isArray(props.days)) {
			return new Error(
				"ModuleList should be an array"	
				)
		} else if(!props.days.length) {
			return new Error(
				"ModuleList must have at least one record"
				)
		} else {
			return null
		}
	}
}