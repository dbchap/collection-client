import React from 'react';
import { connect } from 'react-redux';

class Logs extends React.Component {
    render() {
        return (
            <div style={{ marginTop: '1vw' }}>
                {this.props.error ? <div style={{color:'#fff'}}>Error fetching logs</div> : null}
                {this.props.logs.length ?
                this.props.logs.map((log, logIdx) =>
                <div style={{ padding:'1vw', backgroundColor: logIdx % 2 === 0 ? '#f2f3f4' : '#bcc0c7' }}>{log.action}</div>
                ) : 'No logs yet!'}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logs: state.logs.logs,
        isLoading: state.logs.loading,
        isSaving: state.logs.saving,
        error: state.logs.error
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Logs);