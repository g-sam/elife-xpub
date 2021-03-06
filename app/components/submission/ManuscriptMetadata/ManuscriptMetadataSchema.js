import yup from 'yup'

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  manuscriptType: yup.string().required('Article type is required'),
  subjectAreas: yup
    .array()
    .min(1, `Choose at least 1 subject area`)
    .max(2, `No more than 2 subject areas`)
    .required('Subject area(s) required'),
  submissionMeta: yup.object().shape({
    discussedPreviously: yup.bool(),
    discussion: yup.string().when('discussedPreviously', {
      is: true,
      then: yup.string().required('Please describe your previous discussion'),
    }),
    consideredPreviously: yup.bool(),
    previousArticle: yup.string().when('consideredPreviously', {
      is: true,
      then: yup.string().required('Article title/reference no. is required'),
    }),
    cosubmission: yup.bool(),
    cosubmissionTitle: yup
      .string()
      .test('namehere', 'Article title/reference no. is required', function() {
        const { cosubmission, cosubmissionTitle, cosubmissionId } = this.parent
        return !cosubmission || cosubmissionTitle || cosubmissionId
      }),
    cosubmissionId: yup
      .string()
      .test('namehere', 'Article title/reference no. is required', function() {
        const { cosubmission, cosubmissionTitle, cosubmissionId } = this.parent
        return !cosubmission || cosubmissionTitle || cosubmissionId
      }),
  }),
})

const empty = {
  title: '',
  manuscriptType: '',
  subjectAreas: [],
  submissionMeta: {
    discussedPreviously: false,
    discussion: '',
    consideredPreviously: false,
    previousArticle: '',
    cosubmission: false,
    cosubmissionTitle: '',
    cosubmissionId: '',
  },
}

export { schema, empty }
