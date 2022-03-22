import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Slider, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const RoundAccordian = () => {

    function valuetext(value) {
        return `Round ${value}`;
    }
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Who Took The Round?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        ROUND 1
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                        <Slider
                            aria-label="Round"
                            defaultValue={2}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={3}
                        />
                    </Box>
                    <Typography>
                        ROUND 2
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                        <Slider
                            aria-label="Round"
                            defaultValue={2}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={3}
                        />
                    </Box>
                    <Typography>
                        ROUND 3
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                        <Slider
                            aria-label="Round"
                            defaultValue={2}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={3}
                        />
                    </Box>
                    <Typography>
                        ROUND 4
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                        <Slider
                            aria-label="Round"
                            defaultValue={2}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={3}
                        />
                    </Box>
                    <Typography>
                        ROUND 5
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                        <Slider
                            aria-label="Round"
                            defaultValue={2}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={3}
                        />
                    </Box>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

export default RoundAccordian