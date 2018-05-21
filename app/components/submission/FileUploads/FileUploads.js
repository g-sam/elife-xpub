import React from 'react'
import { Flex, Box } from 'grid-styled'
import { Button, H1 } from '@pubsweet/ui'
import ConfigurableEditor from 'xpub-edit/src/components/configurable/ConfigurableEditor'
import ButtonLink from '../../ui/atoms/ButtonLink'
import FileUpload from '../../ui/molecules/FileUpload'
import ValidatedField from '../../ui/atoms/ValidatedField'
import ProgressBar from '../ProgressBar'

const Editor = ({ validationStatus, ...props }) => (
  <ConfigurableEditor {...props} bold italic smallcaps underline />
)

const FileUploads = ({
  handleSubmit,
  setFieldValue,
  onDrop,
  conversion,
  formError,
}) => (
  <form onSubmit={handleSubmit}>
    <ProgressBar currentStep={1} />

    <H1>Upload your manuscript and cover letter</H1>

    <Flex flexDirection="column">
      <Box mb={3} width={1}>
        <ValidatedField
          component={Editor}
          id="coverLetter"
          name="submissionMeta.coverLetter"
          onBlur={value => setFieldValue('submissionMeta.coverLetter', value)}
          onChange={value => setFieldValue('submissionMeta.coverLetter', value)}
          title="Cover letter"
        />
      </Box>
      <Box mb={3} width={1}>
        <FileUpload
          conversion={conversion}
          data-test-id="upload"
          formError={formError}
          onDrop={onDrop}
        />
      </Box>
    </Flex>

    <Button data-test-id="next" primary type="submit">
      Next
    </Button>
    <ButtonLink to="/submit">Back</ButtonLink>
  </form>
)

export default FileUploads
