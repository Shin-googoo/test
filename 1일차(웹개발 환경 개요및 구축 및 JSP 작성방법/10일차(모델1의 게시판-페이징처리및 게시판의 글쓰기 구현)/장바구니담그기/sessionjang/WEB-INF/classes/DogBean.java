package dog;
public class DogBean  //�ڿ� Bean�� �̸��� ���̴� ���ʰ� �ִ�.
{
	private String name;
	private int count;//����� ���ؼ� �ʿ�
	private double price;

	//���� ���� �� �ִ�.

    //����Ʈ ������ ����

	public DogBean() {}

	public DogBean(String name,int count,double price)
	{
      this.name=name;
	  this.count=count;
	  this.price=price;
	}

    //getter,setter �޼ҵ� ����

	public void setName(String name)
	{
       this.name=name;
	}

	public void setCount(int count)
	{
       this.count=count;
	}

	public void setPrice(double  price)
	{
       this.price=price;
	}

	public String getName()
	{
       return name;
	}

	public int getCount()
	{
       return count;
	}

	public double getPrice()
	{
       return price;
	}
}
