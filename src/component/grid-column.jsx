const CardGird = ({title, image , }) => {
  return (
    <div className="column">
      <GridColumn />
    </div>
  );
};

const GridColumn = ({}) => {
  return (
    <>
      <CardGird />
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 ...">04</div>
        <div class="...">05</div>
        <div class="...">06</div>
        <div class="col-span-2 ...">07</div>
      </div>
    </>
  );
};
export default GridColumn;
