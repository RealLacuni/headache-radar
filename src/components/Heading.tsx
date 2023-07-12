

const Heading = (props: { heading: string }) => {
  return (
    <div className="pt-20 pb-5 border-b border-gray-400">
      <h3 className="px-2 text-3xl leading-6 font-medium text-primary-200">{props.heading}</h3>
    </div>
  )
}

export default Heading;