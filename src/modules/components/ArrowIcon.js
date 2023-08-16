
function ArrowIcon({onClick,classNames, iconName}) {
  return (
    <div className={classNames} onClick={onClick}>
      {iconName}
    </div>
  )
}
export default ArrowIcon;