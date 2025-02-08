/* eslint-disable react/prop-types */
export const AppLayout = (props) => {
	const { information, field } = props;
	return (
		<>
			{information}
			{field}
		</>
	);
};
