import { colors } from '../../constants/colors';
import { Modal, ModalClose, Sheet, Typography } from '@mui/joy';

export default function ModalCommuns({open, handleCloseModal, title, description}) {
  return (
    <Modal 
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={handleCloseModal}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        >
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 500,
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg',
              backgroundColor: colors.mainBackgroundColor2,
            }}
          >
            <ModalClose variant="plain" sx={{ m: 1 }} onClick={handleCloseModal}/>
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor={colors.paragraphColor}
              fontWeight="lg"
              mb={1}
            >
              {title}
            </Typography>
            <div>
              <div>
                <span>
                  {description}
                </span>
              </div>
            </div>
          </Sheet>
        </Modal>
  )
}
