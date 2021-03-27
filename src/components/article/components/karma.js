import cn from 'classnames';

const karma = ({ count, className }) => (<div className={cn(className, 'karma')}>{count}</div>);

export default karma;