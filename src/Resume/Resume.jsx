import React from 'react';
import { Component } from 'react';
import resumePdf from './Resume.pdf';
import { Document, Page } from 'react-pdf';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    hide: {
        visibility: "hidden",
        height: 0
    }
}));

function Resume(props) {
    const classes = useStyles();
    const [file, setFile] = React.useState(resumePdf)

    const onFileChange = (event) => {
        setFile(event.target.files[0])
    }

    return (
        <div className={props.isVisible ? "warning" : classes.hide}>
            <Document file={file}>
                <Page pageNumber={1} />
            </Document>
        </div>
    )
};

Resume.propTypes = {
    isVisible: PropTypes.bool.isRequired
};


export default Resume;