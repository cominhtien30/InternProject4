import React from 'react';
import {ModalFooter ,Button} from 'diginet-core-ui/components';

function popupFooter(props) {
    return (<ModalFooter>
                    <Button
                        type="submit"
                        color="info "
                        text="Lưu"
                        viewType="filled"
                        size="small"
                        style={{ marginLeft: "17.83px", height: "40px", width: "89px" }}
                        startIcon="save"
                        onClick={props.submit}
                    />
        </ModalFooter>
    );
}

export default popupFooter;